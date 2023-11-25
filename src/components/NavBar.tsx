import { useState } from "react";

export default function NavBar(props: any): JSX.Element {
    const [status, setStatus] = useState<string>("");
    return (
        <div className={`flex transition-transform ${status} flex-col shadow-xl w-48 min-h-screen`}>
            <div className="flex justify-between items-center p-3">
                <h1 className="text-purple-80">Project Name</h1>
                <button onClick={() => status === "" ? setStatus("") : setStatus("")}>
                    <img className="w-6 transition opacity-50 hover:opacity-100" src="/public/dashboard.png"/>
                </button>
            </div>
            <div className="flex flex-col flex-grow space-y-4 p-3 justify-center">
                <h1>Score:</h1>
                <ul className="flex flex-col gap-2">
                    {/* <li><input type="text" placeholder={props.players[0]}/></li>
                    <li><input type="text" placeholder={props.players[1]}/></li>
                    <li><input type="text" placeholder={props.players[2]}/></li>
                    <li><input type="text" placeholder={props.players[3]}/></li> */}
                    <li className="flex justify-between"><input className="w-1/2" type="text" placeholder="Player 1"/><h1 className="pr-6">0</h1></li>
                    <li className="flex justify-between"><input className="w-1/2" type="text" placeholder="Player 2"/><h1 className="pr-6">0</h1></li>
                    <li className="flex justify-between"><input className="w-1/2" type="text" placeholder="Player 3"/><h1 className="pr-6">0</h1></li>
                    <li className="flex justify-between"><input className="w-1/2" type="text" placeholder="Player 4"/><h1 className="pr-6">0</h1></li>
                </ul>
            </div>
            
        </div>
    );
}