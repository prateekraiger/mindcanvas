import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Editor, Range, Transforms } from "slate";
import { useSlate } from "slate-react";

export function CommandMenu() {
  const [show, setShow] = useState(false);
  const editor = useSlate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { selection } = editor;
    if (
      selection &&
      !Range.isCollapsed(selection) &&
      Editor.string(editor, selection) !== ""
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [editor.selection]);

  const handleSummarize = () => {
    const { selection } = editor;
    if (selection) {
      const text = Editor.string(editor, selection);
      const summarizedText = `Summarized: ${text}`;
      Transforms.insertText(editor, summarizedText, { at: selection });
    }
  };

  const handleSimplify = () => {
    const { selection } = editor;
    if (selection) {
      const text = Editor.string(editor, selection);
      const simplifiedText = `Simplified: ${text}`;
      Transforms.insertText(editor, simplifiedText, { at: selection });
    }
  };

  const handleGenerateCode = () => {
    const { selection } = editor;
    if (selection) {
      const text = Editor.string(editor, selection);
      const generatedCode = `// Generated code for: ${text}\nconsole.log('Hello, world!');`;
      Transforms.insertText(editor, generatedCode, { at: selection });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          ref={menuRef}
          className="absolute z-20"
        >
          <div className="bg-zinc-800 text-white rounded-lg p-2 flex items-center gap-2">
            <button
              onClick={handleSummarize}
              className="px-2 py-1 rounded-md hover:bg-zinc-700"
            >
              Summarize
            </button>
            <button
              onClick={handleSimplify}
              className="px-2 py-1 rounded-md hover:bg-zinc-700"
            >
              Simplify
            </button>
            <button
              onClick={handleGenerateCode}
              className="px-2 py-1 rounded-md hover:bg-zinc-700"
            >
              Generate Code
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
