import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, cert } from "firebase-admin/app";
// import { serviceAccount } from "./path/to/serviceAccountKey.json";

const CreateBoard = () => {
  // initializeApp({
  //   credential: cert(serviceAccount),
  // });

  const db = getFirestore();

  const onClickSubmit = async () => {
    try {
      const docRef = db.collection("users").doc("alovelace");

      await docRef.set({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
    } catch (error) {
      console.log("파이어베이스 글등록 테스트: ", error);
    }
  };

  return (
    <>
      <span>글 등록 테스트</span>
      <button onClick={onClickSubmit}>등록</button>
    </>
  );
};

export default CreateBoard;
