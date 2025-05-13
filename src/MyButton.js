function MyButton({count, onClick}) {
    return (
        <div>
            <button onClick={onClick}>Clicked {count}</button>     
            <span>you clicked {count} times </span>
        </div>
    );
  }

  export default MyButton