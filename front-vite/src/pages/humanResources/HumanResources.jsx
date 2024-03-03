import Shortcuts from "../../components/Shortcuts";
import IndexPage from "../../components/ProductosLast";
import { useMediaQuery } from "react-responsive";
import CardEmpleyments from "../../components/CardEmpleyments";

export default function HumanResources() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const employees = [
    {
        image: "/images/ropa/image1.svg",
        name: "Lucas Santos",
        cargo: "Empleado de hace mas de 2 años con ganas de seguir aprendiendo."
    },
    {
        image: "/images/ropa/image1.svg",
        name: "Lucas Santos",
        cargo: "Empleado de hace mas de 2 años con ganas de seguir aprendiendo."
    },
    {
        image: "/images/ropa/image1.svg",
        name: "Lucas Santos",
        cargo: "Empleado de hace mas de 2 años con ganas de seguir aprendiendo."
    },
  ];


  return (
    <div className="xl:grid xl:grid-cols-3 max-h-screen flex flex-col items-center gap-10">
      <div className="xl:col-span-2 xl:mt-5">
        <div className="xl:col-span-2 xl:mt-5 flex items-center justify-center flex-col gap-3">
            <h1 className="text-center lg:text-left text-2xl mb-2.5">Recursos Humanos</h1>
            {employees.map((employees, index) => (
                <CardEmpleyments 
                key={index}
                image={employees.image}
                name={employees.name}
                cargo={employees.cargo}
                />
            ) )}
            

        </div>

      </div>

      <div className="xl:col-span-1 flex flex-col items-center xl:mt-8">
        {!isMobile && (
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
        )}
        <div className="mx-4">
          <IndexPage></IndexPage>
        </div>
      </div>
    </div>
  );
}
