import { Outlet } from "react-router-dom"

const MainBlock: React.FC = () => {
    return(
        <main
          className={`overflow-auto col-span-10 py-8 px-4 bg-light-blue`}
        >
            <div className="bg-white h-full shadow-main rounded-lg p-6">
                <Outlet />
            </div>
        </main>
    )
}

export default MainBlock