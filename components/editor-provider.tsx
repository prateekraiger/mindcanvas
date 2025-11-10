"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { Node } from "slate";

const EditorContext = createContext<{
  value: Node[];
  setValue: (value: Node[]) => void;
} | null>(null);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<Node[]>([
    {
      type: "h1",
      children: [{ text: "Welcome to MindCanvas" }],
    },
    {
      type: "p",
      children: [
        { text: "This is a canvas-based notes app for programmers." },
      ],
    },
    {
      type: "code",
      children: [{ text: "console.log('Hello, world!');" }],
    },
    {
      type: "todo",
      children: [{ text: "Add more features" }],
    },
  ]);

  const handleSetValue = useCallback((newValue: Node[]) => {
    setValue(newValue);
  }, []);

  return (
    <EditorContext.Provider value={{ value, setValue: handleSetValue }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}
