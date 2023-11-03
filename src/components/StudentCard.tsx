type Props ={
    name: string;
    email: string;
    avartar: string;
}

export function StudentCard({name, email, avartar}: Props){
    return (
        <div className='flex p-2'>
            <img className='hidden w-14 rounded-full md:block' src={avartar} alt="" />
            <div className='flex flex-col ml-4 mt-2 mr-2'>
                <h2 className="text-sm md:text-sm">{name}</h2>
                <p className="hidden md:block">{email}</p>
            </div>
        </div>
    );
}