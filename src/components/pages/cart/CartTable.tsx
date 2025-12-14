import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';

const CartTable = () => {
    // Mock Cart Data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Green Apple",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr",
            price: 14.00,
            quantity: 5
        },
        {
            id: 2,
            name: "Fresh Indian Malta",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3wItrBNG9WQNDg8l-g9OvRuz8-32QB2o01TcZaygzgvcm14S0SaPUx3UIqnzE1WRo3FCV-MoAFqzUHkQezakuvyXtCgf7aY6mJVMijokZFfS3Xiy3C2UgPJ8q-ELa07bvl4EFumkEx8DGWsLbYji5IsL5nUBHjLMBWAJfEQ9Cvyw9oZZicaLW1aVql0PoOPV6vpyxKcXkN2bwKht2vL2SyCGrC-_pS0dI_UR1ZCnNbE0326U1Xb_Qnxqdli-G5WTUjy9Ur4O75bM0",
            price: 20.00,
            quantity: 1
        },
        {
            id: 3,
            name: "Chinese Cabbage",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAQ1o5TrQMR4Omk8VNLXbL42lpLQ_yq-QDrr_lFl8R1-qlrehwDtcM3rPHj0KjDCQZpiBI8c2vSR8OEBeABZ2fwQ24JUPkuyiGrINxe__ahBl0lviaediuViPAVwo43CPs5U5pswFL60ySiTJSSvOSKhoDI-t7sTBSDQCi_Vm0BE99RJ7OI0tdIXIYTP1okuFwffrYncSg1VdtxVVKXdvESgX20eH9QQMKXNz51zXAekf2JLOoO5PyWb5o7wChnJJdxbcWUNtTxnx3",
            price: 12.00,
            quantity: 1
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 text-text-muted text-xs uppercase font-bold border-b border-gray-100 dark:border-gray-700">
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Quantity</th>
                            <th className="px-6 py-4">Subtotal</th>
                            <th className="px-6 py-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {cartItems.map(item => (
                            <tr key={item.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded border bg-white p-1 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="font-medium text-text-main dark:text-white group-hover:text-primary transition-colors">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-text-main dark:text-gray-300 font-medium">
                                    ${item.price.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-full h-9 w-fit bg-white dark:bg-gray-900">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="w-8 text-center text-sm font-bold text-text-main dark:text-white">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-text-main dark:text-white">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button className="text-sm font-bold bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white px-6 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto">
                    Return to Shop
                </button>
                <button className="text-sm font-bold border border-gray-200 dark:border-gray-700 text-text-main dark:text-white px-6 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all w-full sm:w-auto">
                    Update Cart
                </button>
            </div>
        </div>
    );
};

export default CartTable;
