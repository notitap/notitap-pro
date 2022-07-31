import { FC, useEffect, useState } from "react";
import { NodeViewWrapper, NodeViewProps, NodeViewContent } from "@tiptap/react";
import Tippy from "@tippyjs/react";

export interface LinkMeta {
  title: string;
  description: string;
  images: string[];
  duration: number;
  domain: string;
  url: string;
}

export const LinkView: FC<NodeViewProps> = ({ node, getPos, editor }) => {
  const [isCurrentLinkActive, setIsCurrentLinkActive] = useState(false);

  const setCurrentLinkActiveValue = (val: boolean): void => {
    setIsCurrentLinkActive(val);

    if (linkMeta?.url === node.attrs.href) return;

    getLinkMeta();
  };

  const calculateActiveSateOfCurrentLink = () => {
    const { from, to } = editor.state.selection;

    const nodeFrom = getPos();
    const nodeTo = nodeFrom + node.nodeSize;

    setCurrentLinkActiveValue(nodeFrom <= from && to <= nodeTo);
  };

  useEffect(() => {
    editor.on("selectionUpdate", calculateActiveSateOfCurrentLink);

    setTimeout(calculateActiveSateOfCurrentLink, 100);

    return () => {
      editor.off("selectionUpdate", calculateActiveSateOfCurrentLink);
    };
  });

  const [linkMeta, setLinkMeta] = useState<Partial<LinkMeta>>({});

  const [loadingLinkMeta, setLoadingLinkMeta] = useState(false);

  const getLinkMeta = async () => {
    setLoadingLinkMeta(true);

    try {
      const meta = await (
        await fetch(`https://jsonlink.io/api/extract?url=${node.attrs.href}`)
      ).json();

      setLinkMeta(meta);
    } catch (e: any) {
      throw new Error(e as string);
    } finally {
      setLoadingLinkMeta(false);
    }
  };

  return (
    <NodeViewWrapper as="span">
      <Tippy
        appendTo={document.body}
        trigger="click"
        interactive
        animation="shift-toward-subtle"
        placement="bottom"
        content={
          isCurrentLinkActive && (
            <section
              className="w-[500px] max-h-72 flex flex-row items-start gap-2 rounded-lg border border-slate-300 shadow-lg bg-slate-100 z-[9999] p-2 not-prose"
              contentEditable="false"
            >
              {linkMeta.url ? (
                <>
                  <img
                    className="w-[200px] object-scale-down"
                    src={linkMeta.images?.[0]}
                    alt={linkMeta.title}
                  />
                  <section className="flex flex-col">
                    <h2 className="text-xl font-bold">{linkMeta.title}</h2>
                    <p>{linkMeta.description?.substring(0, 60)}...</p>
                    <a
                      className="link"
                      href={linkMeta.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Link
                    </a>
                  </section>
                </>
              ) : (
                <span> No Preview </span>
              )}
            </section>
          )
        }
      >
        <a href={node.attrs.href} className="relative">
          <NodeViewContent as="span" />
        </a>
      </Tippy>
    </NodeViewWrapper>
  );
};
