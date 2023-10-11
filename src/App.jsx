import React, { useEffect, useState } from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import styles from './App.style'
import TextElement from './components/Text';
import colors from './theme/colors';
import InputTextElement from './components/InputText';
import {fetchDistricts, fetchProvinces, fetchRegencies} from './apis/LocationApi';

import logoIcon from './assets/icon.png';
import InputDropdown from './components/InputDropdown';
import { sendMessage } from './apis/FonnteApi';

function App() {
    const isDarkMode = useColorScheme() === 'dark'

    const [name, setName] = useState('')
    const [province, setProvince] = useState(null)
    const [regency, setRegency] = useState(null)
    const [district, setDistrict] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const [provinces, setProvinces] = useState([])
    const [regencies, setRegencies] = useState([])
    const [districts, setDistricts] = useState([])

    useEffect(() => {
        fetchProvinces(setProvinces, setIsLoading)
    }, [])

    useEffect(() => {
        setRegency(null)
        setDistrict(null)
        if (province){
            fetchRegencies(province.id, setRegencies, setIsLoading)
        }
    }, [province])

    useEffect(() => {
        setDistrict(null)
        if (regency) {
            fetchDistricts(regency.id, setDistricts, setIsLoading)
        }
    }, [regency])

    function validateInput(){
        if (name == '') return false
        if (!province) return false
        if (!regency) return false
        if (!district) return false
        return true
    }

    function onSubmit(){
        sendMessage(name, province.name, regency.name, district.name)
    }

    return (
        <SafeAreaView style={styles.background}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <View
                style={styles.content}>
                <View>
                    <Image
                        style={styles.logo}
                        source={logoIcon}
                    />
                    <TextElement fontSize='large'>
                        React Native {"\n"}
                        User Registration Form
                    </TextElement>
                </View>
                <View style={styles.formContainer}>
                    <TextElement fontSize='small' color={colors.textGrey}>
                        GoAPI / Emsifa Location API
                    </TextElement>
                    <InputTextElement value={name} setValue={setName} placeholder='Nama Lengkap' />
                    <InputDropdown data={provinces} setSelected={setProvince} placeholder='Provinsi'/>
                    <InputDropdown data={regencies} setSelected={setRegency} placeholder='Kota'/>
                    <InputDropdown data={districts} setSelected={setDistrict} placeholder='Kecamatan'/>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={validateInput() ? styles.submitBtn : styles.disabledSubmitBtn} disabled={!validateInput()} onPress={onSubmit}>
                        <TextElement>
                            Register
                        </TextElement>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default App;