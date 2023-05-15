import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipNames } from '../../../constants/editor';

interface EditorButtonProps {
  onClick: () => void;
  children: ReactNode;
  tooltip: TooltipNames;
  name: string;
}
const EditorButton = ({ onClick, children, tooltip, name }: EditorButtonProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleClick = (): void => {
    onClick();

    if (name === 'copy') {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <div className="group relative" data-name={name}>
      <button
        type="button"
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-400 duration-500 ease-in-out"
        onClick={handleClick}
      >
        {children}
      </button>
      <div className="text-xs invisible opacity-0 duration-500 group-hover:visible group-hover:opacity-100 absolute -bottom-7 right-0 bg-white rounded-sm py-1 px-2 shadow-sm z-10 whitespace-nowrap">
        {name === 'copy' && copied ? (
          <span className="text-[#40327A] capitalize">{t('editor.tooltips.copied')}</span>
        ) : (
          <span className="capitalize">{tooltip}</span>
        )}
      </div>
    </div>
  );
};

export default EditorButton;
