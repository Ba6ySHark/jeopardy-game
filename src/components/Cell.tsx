import CardInfo from "../util/CardInfo";

export default function Cell(props: any): JSX.Element {
    return (
        <div className="w-20 h-20 flex flex-col items-center justify-center rounded-lg border-solid border-2 hover:bg-gray-200" onClick={() => {
            props.setCardInfo(new CardInfo(`Topic 1 for ${props.value}`, "idk"));
            props.setTrigger(true);
        }}>
            <h1 className="text-purple-80">{`$${props.value}`}</h1>
        </div>
    );
}