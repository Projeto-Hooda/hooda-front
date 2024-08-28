import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../model/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../utils/ToastAlerta"
import Produto from "../model/Produto"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    updateUsuarioContext(novosDados: Partial<UsuarioLogin>): void;
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    adicionarQuantidadeProduto: (produtoId: number) => void
    removerQuantidadeProduto: (produtoId: number) => void
}
interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso",'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes",'info')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    function updateUsuarioContext(novosDados: Partial<UsuarioLogin>) {
        setUsuario((prevState) => ({
            ...prevState,
            ...novosDados,
        }));
    }

    const [items, setItems] = useState<Produto[]>([]);

    function adicionarProduto(produto: Produto) {
      setItems(state => {
        // Verifica se o produto já existe no carrinho
        const produtoExistente = state.find(item => item.id === produto.id);
    
        if (produtoExistente) {
          // Se o produto já existe, apenas aumenta a quantidade
          return state.map(item => 
            item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
          );
        } else {
          // Se o produto não existe, adiciona o novo produto ao carrinho
          return [...state, { ...produto, quantidade: 1 }];
        }
      });
    }
    
    function adicionarQuantidadeProduto(produtoId: number) {
      setItems(state => {
        // Verifica se o produto existe no carrinho
        const produtoExistente = state.find(item => item.id === produtoId);
    
        if (produtoExistente) {
          // Se o produto existe, aumenta a quantidade
          return state.map(item =>
            item.id === produtoId
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          );
        } else {
          // Se o produto não existir, retorna o estado atual sem modificações
          return state;
        }
      });
    }
    
    function removerQuantidadeProduto(produtoId: number) {
      setItems(state => {
        // Verifica se o produto existe no carrinho
        const produtoExistente = state.find(item => item.id === produtoId);
    
        if (produtoExistente) {
          // Se o produto existe, diminui a quantidade
          return state
            .map(item =>
              item.id === produtoId
                ? { ...item, quantidade: item.quantidade - 1 }
                : item
            )
            .filter(item => item.quantidade > 0); // Remove o item se a quantidade for zero ou menor
        } else {
          // Se o produto não existir, retorna o estado atual sem modificações
          return state;
        }
      });
    }
    
    function removerProduto(produtoId: number) {
      setItems(state => 
        state.filter(item => item.id !== produtoId) // Remove o produto do carrinho
      );
    }
    
    function limparCart() {
      toastAlerta("Compra Efetuada com Sucesso", "sucesso");
      setItems([]);
    }   

    return (    // Adicionar as propriedades ao Provider já existente
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, updateUsuarioContext, limparCart, items, adicionarQuantidadeProduto,removerQuantidadeProduto }}>
            {children}
        </AuthContext.Provider>
    )
}