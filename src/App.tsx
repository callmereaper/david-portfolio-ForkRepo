import Experience from '@/experience/Experience'
import { AppContext } from '@/context/appContext'
import { useTheme } from '@/src/hooks/useTheme'

function App() {
    const [brightness, handleSetBrightness, isLightMode] = useTheme()

    return (
        <AppContext.Provider
            value={{
                brightness: brightness,
                handleSetBrightness: handleSetBrightness,
                isLightMode: isLightMode
            }}
        >
            <Experience />
        </AppContext.Provider>
    )
}

export default App
