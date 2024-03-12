import ReactECharts from 'echarts-for-react';
import Searchbar from '../../components/Searchbar';
import { useMediaQuery } from 'react-responsive';
import InfoCard from '../../components/InfoCard';
import CardsInfo from '../../components/CardsInfo';
import Shortcuts from '../../components/Shortcuts';
import IndexPage from '../../components/ProductosLast';

export default function Reports() {
  const cardsMobile = [
    { icon: "paid", title: "Ventas", amount: "$100000" },
    { icon: "show_chart", title: "Ganancia", amount: "$50000" },
    { icon: "sell", title: "Stock vendido", amount: "20%" },
  ];
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  let option = {
    color: [
      '#001E39',
      '#83C2AC',
      '#66ACD4',
      '#04476D',
      '#1E6D51',
    ],
    title: {
      text: 'Reporte de ventas',
      top: 5,
      right: 'center',
      textStyle: {
        fontWeight: 600,
        fontSize: 12,
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Ventas directas', 'Retail', 'Wholesale',],
      top: 30,
      right: 15,
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Ventas directas',
        type: 'line',
        data: [6000, 10000, 7000, 8000, 5000, 6500, 10000, 4000, 7000, 6000, 8000, 8000]
      },
      {
        name: 'Retail',
        type: 'line',
        data: [5000, 5200, 5000, 9000, 7000, 10000, 7000, 5000, 17000, 10000, 5000, 8000]
      },
      {
        name: 'Wholesale',
        type: 'line',
        data: [10000, 7000, 15000, 10000, 13000, 6000, 16000, 13000, 15000, 6000, 15000, 16000]
      },
    ]
  };

  const labelOption2 = {
    show: true,
    formatter: '{c}',
    fontSize: 14,
    textBorderColor: 'none',
    
  }
  let option2 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      textStyle: {
        fontWeight: 400,
        fontSize: 10,
      }
    },
    color: [
      '#83C2AC',
      '#66ACD4',
      '#04476D',
      '#001E39',
      '#1E6D51',
    ],
    series: [
      {
        type: 'pie',
        radius: '70%',
        data: [
          { value: 10000, name: 'Compras'},
          { value: 70000, name: 'Ganancia'},
          { value: 20000, name: 'Stock Vendido'},
        ],
        label: labelOption2,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className='w-full h-full xl:grid xl:grid-cols-3 xl:mt-5'>
      <div className='xl:col-span-2 flex flex-col items-center lg:items-stretch'>
        <h1 className="text-center lg:text-left text-2xl mb-2.5">Reportes</h1>
        <div className='mx-4 mb-4 flex justify-center xl:hidden'>
          <div className="carousel max-w-64 sm:max-w-lg space-x-4 lg:hidden">
            {cardsMobile.map((card) => (
              <div className="carousel-item" key={card.title}>
                <InfoCard {...card} />
              </div>
            ))}
          </div>
        </div>
        {!isMobile && <CardsInfo showSales={true} showStock={false} showShoppings={false}/>}
        <div className="flex justify-center mb-4">
          {isMobile && <Searchbar />}    
        </div>
        <div className='bg-white pt-2'>
          <ReactECharts option={option} />
        </div>
        <div className='mt-4 px-4'>
          <ReactECharts option={option2} />
        </div>
      </div>
      <div className="xl:col-span-1 flex flex-col items-center xl:mt-8">
          {!isMobile && (
            <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
              <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
              <div className="grid grid-cols-2 gap-6 gap-y-6">
                <Shortcuts label={"Crear Producto"} icon='add_business'></Shortcuts>
                <Shortcuts label={"Nueva Orden"} icon='note_add'></Shortcuts>
                <Shortcuts label={"Editar Producto"} icon='edit'></Shortcuts>
                <Shortcuts label={"Eliminar Proveedor"} icon='delete'></Shortcuts>
              </div>
            </div>
          )}
          <div className="mx-4">
            <IndexPage></IndexPage>
          </div>
      </div>
    </div>
  )
}
