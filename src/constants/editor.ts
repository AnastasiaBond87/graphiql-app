import { TEditorOptions } from '../types/editor';

const editorOptions: TEditorOptions = {
  formatOnPaste: true,
  formatOnType: true,
  theme: 'vs-dark',
  tabSize: 2,
  fixedOverflowWidgets: true,
  minimap: {
    enabled: false,
  },
  scrollbar: {
    alwaysConsumeMouseWheel: true,
  },
};

enum Files {
  query = 'query.graphql',
  variables = 'variables.json',
  result = 'result.json',
}

export { editorOptions, Files };
