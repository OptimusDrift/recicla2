import { initializeApp } from "@firebase/app";
import { getDatabase, ref, child, get } from "@firebase/database";
import Pregunta from "./Pregunta";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGXFDGu4udU1hME0LOb0X-m8wDz-3Ap1A",
  authDomain: "recicla2-24291.firebaseapp.com",
  databaseURL: "https://recicla2-24291-default-rtdb.firebaseio.com",
  projectId: "recicla2-24291",
  storageBucket: "recicla2-24291.appspot.com",
  messagingSenderId: "130197782133",
  appId: "1:130197782133:web:98fc2cf4443e0571c7023c",
  measurementId: "G-1ZR2Y1Z7CY",
};

const app = initializeApp(firebaseConfig);

const bd = ref(getDatabase());

export const preg = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        get(bd).then((snapshot) => {
          if (snapshot.exists()) {
            let pp = new Array<Pregunta>();
            snapshot.val().forEach((p) => {
              pp.push(
                new Pregunta(
                  p["Nivel"],
                  p["Pregunta"],
                  p["Idioma"],
                  p["RespuestaCorrecta"],
                  new Array<string>(
                    p["RespuestaCorrecta"],
                    p["RespuestaIncorrecta1"],
                    p["RespuestaIncorrecta2"],
                    p["RespuestaIncorrecta3"]
                  ),
                  p["RespuestaDeRisaEnCasoDeSerCorrecta"],
                  p["RespuestaDeRisaEnCasoDeSerIncorrecta"]
                )
              ); //Agrega las preguntas
            });
            return pp;
          } else {
            console.log("No data available");
          }
        })
      );
      reject("¡Error!");
    }, 250);
  });
