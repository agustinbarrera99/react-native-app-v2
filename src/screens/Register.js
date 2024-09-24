import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colores } from "../global/colores";
import SubmitButon from "../components/SubmitButon";
import { useRegisterMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { registerSchema } from "../validations/registerSchema";
import InputFormulario from "../components/InputFormulario";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerRegister, { data, isSuccess, isError, error }] =
    useRegisterMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setErrorEmail("email existente");
    }
  }, [isError]);

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          setErrorConfirmPassword("");
          break;
        case "password":
          setErrorEmail("");
          setErrorPassword(error.message);
          setErrorConfirmPassword("");
          break;
        case "confirmPassword":
          setErrorEmail("");
          setErrorPassword("");
          setErrorConfirmPassword(error.message);
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputFormulario
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputFormulario
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <InputFormulario
          label="Confirmar Password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={errorConfirmPassword}
        />
        <SubmitButon onPress={onSubmit} title="Registrarme" />
        <Text style={styles.sub}>ya tenes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Inicio de sesion</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colores.lightGray, 
    },
    container: {
      width: "90%",
      backgroundColor: colores.color1,
      gap: 20,
      borderRadius: 12,
      paddingVertical: 25,
      paddingHorizontal: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,  
    },
    title: {
      fontSize: 24,
      fontFamily: "Lobster",
      color: colores.color2,
    },
    sub: {
      fontSize: 16,
      color: "#333", 
    },
    subLink: {
      fontSize: 16,
      color: colores.accent,  
      textDecorationLine: "underline", 
    },
  });