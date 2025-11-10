"use client";
import { Editor } from "@/components/ui/editor/editor";
import { EditorProvider } from "@/components/editor-provider";

export default function Page() {
  return (
    <EditorProvider>
      <main className="min-h-screen">
        <Editor />
      </main>
    </EditorProvider>
  );
}
