import Topbar from '../../components/Topbar'
import AddProductForm from '../../components/addProductForm'
import AddProviderForm from '../../components/addProviderForm'
import AddClientForm from '../../components/addClientForm'
import AddEmployeeForm from '../../components/addEmployeeForm'
import AddOrderForm from '../../components/addOrderForm'


export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Actividad de hoy</h2>
      <AddProductForm></AddProductForm>
      <AddProviderForm></AddProviderForm>
      <AddClientForm></AddClientForm>
      <AddEmployeeForm></AddEmployeeForm>
      <AddOrderForm></AddOrderForm>
    </div>
  )
}
