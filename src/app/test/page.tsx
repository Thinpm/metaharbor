const Test = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between bg-transparent p-4">
                <div className="flex items-center space-x-4">
                    <img src="https://placehold.co/40x40" alt="A placeholder logo for MetaHarbor" className="w-10 h-10" />
                    <span className="font-bold pr-5 border-r-2">METAHARBOR</span>
                    <span className="pl-5">Drops</span>
                    <span className="pl-5">Stats</span>
                    <span className="pl-5">Create</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/search.png" alt="Search" className="w-8 h-8" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/user.png" alt="User" className="w-8 h-8" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/shoppingcart.png" alt="Shopping Cart" className="w-8 h-8" />
                    </button>
                    <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                        Login
                    </button>
                </div>
            </div>
            <div className="w-full h-250 bg-gray-300 flex items-center justify-center">
                <img
                    src="https://placehold.co/1000x300"
                    alt="Placeholder Image"
                    className="h-full object-contain"
                />
            </div>
        </div>
        
    );
}

export default Test;
