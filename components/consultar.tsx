import { supabase } from "@/lib/supabase";
import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#000',
    }
});

export default function Consultar(){
    const [alunos, setAlunos] = useState<any[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            carregarAlunos();
        }
    }, [isFocused]);
    
    async function carregarAlunos(){
        const {data, error } = await supabase
        .from('alunos')
        .select('*');

        setAlunos(data || []);
    }

    async function excluirAluno(id: number){
        Toast.show({
            type: 'success',
            text1: 'Aluno excluído com sucesso!'
        });
    }
//alteração
    async function alterarAluno(id: number){
        Toast.show({
            type: 'success',
            text1: 'Aluno alterado com sucesso!'
        });
        router.push(`/(tabs)/cadastrar`);
    }

    return(
        <View style={styles.container}>
            <Text>Consultar Alunos</Text>
            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>(
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.idade}</Text>
                        <Text>{item.email}</Text>

                        <TouchableOpacity onPress={() => alterarAluno(item.id)}>
                            <Text>Alterar</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => excluirAluno(item.id)}>
                            <Text>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Toast/>
        </View>
    );
};

// Removed duplicate styles declaration
