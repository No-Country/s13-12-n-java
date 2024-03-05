import Shortcuts from "../../components/Shortcuts";
import IndexPage from "../../components/ProductosLast";
import { useMediaQuery } from "react-responsive";
import CardEmpleyments from "../../components/CardEmpleyments";
import InventSearch from "../../components/InventSearch";

export default function HumanResources() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const employees = [
    {
      image: "/images/image-ej.jpg",
      name: "Micaela Acosta",
      cargo: "Administradora",
    },
    {
      image: "/images/employee/employee1.svg",
      name: "Micaela Acosta",
      cargo: "Tecnica en Administracion",
    },
    {
      image: "/images/employee/employee2.svg",
      name: "Lucas Santos de Algomas",
      cargo: "Limpieza",
    },
    {
      image: "/images/employee/employee3.svg",
      name: "Micaela Acosta de Algomas",
      cargo: "Tecnica en Administracion",
    },
    {
      image: "/images/employee/employee4.svg",
      name: "Micaela Acosta de Algomas",
      cargo: "Tecnica en Administracion",
    },
    {
      image: "/images/employee/employee5.svg",
      name: "Micaela Acosta de Algomas",
      cargo: "Tecnica en Administracion",
    },
  ];

  return (
    <div className="xl:grid xl:grid-cols-3 flex flex-col items-center gap-10">
      <div className="xl:col-span-2 xl:mt-5 w-full">
        <div className="xl:col-span-2 xl:mt-5 flex items-center justify-center flex-col gap-3">
          <h1 className="text-center text-2xl mb-2.5">
            Recursos Humanos
          </h1>
          <InventSearch/>
          {employees.map((employees, index) => (
            <CardEmpleyments
              key={index}
              image={employees.image}
              name={employees.name}
              cargo={employees.cargo}
            />
          ))}
        </div>
      </div>

      <div className="xl:col-span-1 flex flex-col items-center xl:mt-8">
        {/* {!isMobile && (
          <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
            <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
            <div className="grid grid-cols-2 gap-6 gap-y-6">
              <Shortcuts
                label={"Crear Producto"}
                icon="add_business"
              ></Shortcuts>
              <Shortcuts label={"Nueva Orden"} icon="note_add"></Shortcuts>
              <Shortcuts label={"Nuevo Empleado"} icon="person_add"></Shortcuts>
              <Shortcuts label={"Nueva Categoría"} icon="category"></Shortcuts>
            </div>
          </div>
        )} */}
        <div className="mx-4">
          <IndexPage></IndexPage>
        </div>
      </div>
    </div>
  );
}
