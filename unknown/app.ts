let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";
// userName = userInput; // Error: unknown type은 string에 할당되지 않음
// 하지만 any타입은 가장 유연한 타입이기 때문에 모든 타입을 허용함

// 만약 unknown을 사용하면서 string을 할당하려면 추가 조건이 필요
if (typeof userInput === "string") {
  userName = userInput;
}

// naver type
function generateError(message: string, code: number){
  throw { message: message, errorCode: code };
}

generateError("An error", 500);
