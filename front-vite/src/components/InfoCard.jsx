export default function InfoCard({ icon, title, amount }) {
    return (
      <div className="flex gap-2 items-center shadow-md py-2 px-4 bg-light-blue text-white rounded-lg w-48 lg:w-52 lg:bg-dark-blue mt-1">
        <span className="material-symbols-rounded">{icon}</span>
        <div>
          <p>{title}</p>
          <p>{amount}</p>
        </div>
      </div>
    );
  }