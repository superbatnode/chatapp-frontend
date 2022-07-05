export default function Chats(props){
    return(
        <div className={props.className}>
            <p>{props.message}</p>
            <small>{props.timestamp}</small>
        </div>
    )
}