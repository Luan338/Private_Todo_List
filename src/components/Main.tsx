import styles from "./Main.module.css";
import { PlusCircle } from "phosphor-react";

export default function Main(){
    return(
      <main>
        <form className={styles.form_todo_list}>
            <input className={styles.input_text} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.btn_create}>
                Criar
                <PlusCircle size={20} color="#f2f2f2" weight="bold" />
            </button>
        </form>
        <section className={styles.container}>
            <div className={styles.status}>
                <h3 className={styles.create}>Tarefas criadas <span>0</span></h3>
                <h3 className={styles.concluded}>Concluídas <span>0</span></h3>
            </div>
            <div>
                
            </div>
        </section>
      </main>
    )
  }