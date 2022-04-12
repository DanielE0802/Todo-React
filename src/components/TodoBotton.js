function TodoBotton() {

  const showModal = (msg) =>{
    alert(msg);
  }

  return (
    <button className="TodoBotton" onClick={() => showModal("click") }>
      Crear ToDo
    </button>
  );
}

export { TodoBotton };
