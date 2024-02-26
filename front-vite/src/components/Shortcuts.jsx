import React from "react";

export default function Shortcuts({ icon, label, action }) {
  return (
    <div className="flex justify-center relative">
      <button onCLick={action} className="bg-blue flex flex-col w-28 h-28 rounded-xl items-center justify-center relative">
        <div className="bg-light-blue w-10 h-10 p-4 rounded-full absolute top-0 transform -translate-y-1/2 flex items-center justify-center">
            <span className="material-symbols-rounded text-white">{icon}</span>
        </div>
        <div className="p-3">
          <span className="text-white font-medium">{label}</span>
        </div>
      </button>
    </div>
  );
}
