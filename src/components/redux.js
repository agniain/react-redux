import { Provider } from "react-redux";
import Counter from "./counter";
import store from "./app/CounterFeatures/store";

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>            
        </div>
    )
}

export default Redux;