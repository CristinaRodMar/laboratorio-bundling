import { FC } from "react";
import config from "./env-config";
import styles from "./title.module.css"; 

export const HelloComponent: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
      <h1 className={styles.gradientTitle}>
        ¡Hola mundo!
      </h1>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transition-all hover:scale-105">
        <img
          className="w-full h-64 object-cover"
          src="https://picsum.photos/200/300"
          alt="Imagen aleatoria"
        />
        <div className="px-6 py-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg text-center font-medium">
            ¡Todo hecho con React + Tailwind + CSS Modules!
          </p>
        </div>
      </div>
    </div>
  );
};