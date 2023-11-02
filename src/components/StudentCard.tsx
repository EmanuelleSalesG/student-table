import {students} from '@/data/students'

export function StudentCard(){
    return (
        <div className='flex p-2'>
            <img className='w-16 rounded-full' src={students[0].avatar} alt="" />
            <div className='flex flex-col ml-4 mt-2 '>
                <h2>{students[0].name}</h2>
                <p>{students[0].email}</p>
            </div>
        </div>
    );
}