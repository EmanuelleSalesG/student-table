import {StudentCard} from '@/components/StudentCard'
import {students} from '@/data/students'
import {StudentStatus} from '@/components/StudentStatus'

function showStudents(){
    
}


export function Table(){
    return (
        <div>
            <table className="text-left bg-blue-600  w-full">
                <tr className="bg-white text-blue-900">
                    <th className='text-center'>Name</th>
                    <th className='hidden md:inline-block'>Status</th>
                    <th className='text-center w-24'>Grade 1</th>
                    <th className='text-center w-24'>Grade 2</th>
                    <th className='text-center w-24'>Final Grade</th>
                </tr>
                {
                    students.map((student)=>
                    
                    <tr>
                        <td><StudentCard
                        name = {student.name}
                        email = {student.email}
                        avartar = {student.avatar}
                        />
                        
                        </td>
                        <td className='hidden md:inline'><StudentStatus
                        status = {student.active}
                        /></td>
                        <td className='text-center border-2'>{student.grade1}</td>
                        <td className='text-center border-2'>{student.grade2}</td>
                        <td className='text-center border-2'>{
                            (student.active) ? ((student.grade1 + student.grade2)/2.).toFixed(1) : '--'
                        }</td>
                    </tr> 
                    )
                }
            </table>
        </div>
    );
}