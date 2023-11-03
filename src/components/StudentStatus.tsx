type Props = {
    status: boolean
}

export function StudentStatus({status}: Props){
    return (

        <div className=''>
           {status ?
                <p className='bg-green-500 rounded-md inline px-2 py-1'>Active</p> 
                : <p className='bg-red-600 rounded-md inline px-1 py-1'>Inactive</p>
            }
        </div>
    );
}