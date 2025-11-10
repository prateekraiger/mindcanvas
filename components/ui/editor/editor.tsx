import { useEditor } from "@/components/editor-provider";
import { DottedBackground } from "./dotted-background";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { useMemo } from "react";
import { CommandMenu } from "./command-menu";

export function Editor() {
  const { value, setValue } = useEditor();
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate
      editor={editor}
      initialValue={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <DottedBackground>
        <CommandMenu />
        <div className="relative z-10 mx-auto max-w-4xl py-24">
          <Editable
            renderElement={(props) => {
              switch (props.element.type) {
                case "h1":
                  return <h1 {...props.attributes}>{props.children}</h1>;
                case "p":
                  return <p {...props.attributes}>{props.children}</p>;
                case "code":
                  return (
                    <pre {...props.attributes}>
                      <code>{props.children}</code>
                    </pre>
                  );
                case "todo":
                  return (
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span {...props.attributes}>{props.children}</span>
                    </div>
                  );
                default:
                  return <p {...props.attributes}>{props.children}</p>;
              }
            }}
          />
        </div>
      </DottedBackground>
    </Slate>
  );
}
