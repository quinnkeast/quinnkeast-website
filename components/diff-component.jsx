import { diffWordsWithSpace } from 'diff';

export default function DiffComponent({ original, revised, whys, styleGuide = "Style guide" }) {
  const diff = diffWordsWithSpace(original, revised);

  const renderDiffText = () => {
    return diff.map((part, index) => {
      if (part.added) {
        return (
          <span key={index} className="bg-green-100 text-green-800 rounded px-1">
            {part.value}
          </span>
        );
      } else if (part.removed) {
        return (
          <span key={index} className="bg-red-100 text-red-800 line-through rounded px-1">
            {part.value}
          </span>
        );
      } else {
        return <span key={index}>{part.value}</span>;
      }
    });
  };

  return (
    <div className="border border-blue-200 rounded-lg my-6 md:mx-12 bg-blue-50 overflow-hidden">
      <div className="text-gray-900 text-sm bg-[#FAFCFF] py-2 px-3">
        {renderDiffText()}
      </div>
      <div className="flex items-center justify-between py-1.5 px-3">
        <div className="flex flex-row items-center align-middle text-blue-600 gap-1 bg-[#F0F5FE]">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6118_1381)"><path d="M11.5529 5.8133C11.9993 5.367 12.2502 4.76165 12.2503 4.1304C12.2503 3.49916 11.9996 2.89374 11.5533 2.44733C11.107 2.00092 10.5017 1.75008 9.87045 1.75C9.23921 1.74992 8.63379 2.00061 8.18738 2.44691L3.30522 7.33156C3.10918 7.52703 2.96421 7.76769 2.88305 8.03237L1.76768 11.7069C1.74585 11.78 1.74421 11.8575 1.76291 11.9314C1.78161 12.0053 1.81996 12.0727 1.87389 12.1266C1.92782 12.1804 1.99533 12.2187 2.06924 12.2373C2.14315 12.2558 2.22072 12.2541 2.2937 12.2321L5.96912 11.1176C6.23355 11.0372 6.47419 10.8931 6.66993 10.6979L11.5529 5.8133Z" stroke="currentColor" stroke-width="0.88" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.51807 3.14998C2.49724 3.06923 2.45515 2.99554 2.39618 2.93657C2.33721 2.8776 2.26352 2.83552 2.18278 2.81468L0.751313 2.44556C0.72689 2.43863 0.705396 2.42392 0.69009 2.40367C0.674785 2.38341 0.666504 2.35872 0.666504 2.33333C0.666504 2.30794 0.674785 2.28325 0.69009 2.26299C0.705396 2.24274 0.72689 2.22803 0.751313 2.2211L2.18278 1.85174C2.26349 1.83093 2.33717 1.78888 2.39613 1.72996C2.45509 1.67103 2.4972 1.59739 2.51807 1.51669L2.88719 0.0852226C2.89405 0.0607042 2.90875 0.0391035 2.92903 0.0237162C2.94931 0.00832898 2.97408 0 2.99954 0C3.025 0 3.04976 0.00832898 3.07004 0.0237162C3.09033 0.0391035 3.10502 0.0607042 3.11188 0.0852226L3.48077 1.51669C3.50161 1.59743 3.54369 1.67112 3.60266 1.73009C3.66163 1.78906 3.73532 1.83115 3.81607 1.85198L5.24753 2.22087C5.27214 2.22766 5.29385 2.24233 5.30932 2.26265C5.32479 2.28297 5.33317 2.3078 5.33317 2.33333C5.33317 2.35887 5.32479 2.3837 5.30932 2.40401C5.29385 2.42433 5.27214 2.439 5.24753 2.44579L3.81607 2.81468C3.73532 2.83552 3.66163 2.8776 3.60266 2.93657C3.54369 2.99554 3.50161 3.06923 3.48077 3.14998L3.11165 4.58144C3.10479 4.60596 3.0901 4.62756 3.06981 4.64294C3.04953 4.65833 3.02476 4.66666 2.9993 4.66666C2.97384 4.66666 2.94908 4.65833 2.9288 4.64294C2.90851 4.62756 2.89382 4.60596 2.88696 4.58144L2.51807 3.14998Z" fill="currentColor"></path><path d="M10.5181 12.4832C10.4972 12.4025 10.4551 12.3288 10.3962 12.2698C10.3372 12.2109 10.2635 12.1688 10.1828 12.1479L8.75131 11.7788C8.72689 11.7719 8.7054 11.7572 8.69009 11.7369C8.67478 11.7167 8.6665 11.692 8.6665 11.6666C8.6665 11.6412 8.67478 11.6165 8.69009 11.5962C8.7054 11.576 8.72689 11.5613 8.75131 11.5544L10.1828 11.185C10.2635 11.1642 10.3372 11.1221 10.3961 11.0632C10.4551 11.0043 10.4972 10.9306 10.5181 10.8499L10.8872 9.41847C10.8941 9.39396 10.9087 9.37236 10.929 9.35697C10.9493 9.34158 10.9741 9.33325 10.9995 9.33325C11.025 9.33325 11.0498 9.34158 11.07 9.35697C11.0903 9.37236 11.105 9.39396 11.1119 9.41847L11.4808 10.8499C11.5016 10.9307 11.5437 11.0044 11.6027 11.0633C11.6616 11.1223 11.7353 11.1644 11.8161 11.1852L13.2475 11.5541C13.2721 11.5609 13.2939 11.5756 13.3093 11.5959C13.3248 11.6162 13.3332 11.641 13.3332 11.6666C13.3332 11.6921 13.3248 11.7169 13.3093 11.7373C13.2939 11.7576 13.2721 11.7723 13.2475 11.779L11.8161 12.1479C11.7353 12.1688 11.6616 12.2109 11.6027 12.2698C11.5437 12.3288 11.5016 12.4025 11.4808 12.4832L11.1117 13.9147C11.1048 13.9392 11.0901 13.9608 11.0698 13.9762C11.0495 13.9916 11.0248 13.9999 10.9993 13.9999C10.9738 13.9999 10.9491 13.9916 10.9288 13.9762C10.9085 13.9608 10.8938 13.9392 10.887 13.9147L10.5181 12.4832Z" fill="currentColor"></path><line x1="7.35355" y1="3.66329" x2="10.3366" y2="6.64638" stroke="currentColor"></line></g><defs><clipPath id="clip0_6118_1381"><rect width="14" height="14" fill="white"></rect></clipPath></defs></svg>
          <span className="text-xs">1 suggested edit</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-red-500 hover:text-red-700">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button className="text-green-500 hover:text-green-700">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white py-2 px-3">
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs font-medium text-gray-900">Why</div>
          <span className="text-gray-500 text-xs">{styleGuide}</span>
        </div>
        <div className="text-gray-700 list-disc mt-1 ml-3">
          {whys.map((why, index) => (
            <span key={index} className="list-item text-sm">
              {why}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
