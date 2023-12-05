import {NextResponse} from 'next/server'

console.log(process.env.TOKEN)

import { readFileSync, writeFileSync} from 'fs';

export async function GET() {
    //Extract params
    //Query database
    //Communicate with other service (paypal, etc)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)

    //const users = JSON.parse(readFileSync("user.txt"))
    //users.map(user => console.log(user))
    
    return NextResponse.json({data})
}

export async function POST(request) {
    const data = await request.json()
    //const {nombre, apellido} = await request.json()
    //console.log(nombre, apellido)
    
    try{ // Read user.txt from disk and concatenate with data from request
       const users = JSON.parse(readFileSync("user.txt"))
       writeFileSync("user.txt", JSON.stringify([...users, data]))
    } catch(e){ // If user.txt file does not exist
        writeFileSync("user.txt", JSON.stringify([data]))
    }
 
    return NextResponse.json({
        message: "Creando datos"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "Actualizando datos"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "Eliminando datos"
    })
}
