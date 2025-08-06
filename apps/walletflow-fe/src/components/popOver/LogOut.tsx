import CustomPopOver from '@/common/CustomPopOver'

const LogOut = () => {
  return (
    <CustomPopOver className="bg-white p-2 rounded shadow">
      <button className="text-sm text-red-500 hover:underline">
        Logout
      </button>
    </CustomPopOver>
  )
}

export default LogOut
