import { useState, useCallback } from 'react'
import Welcome from './components/Welcome'
import VersionSelect from './components/VersionSelect'
import Question from './components/Question'
import Progress from './components/Progress'
import Loading from './components/Loading'
import Result from './components/Result'
import SoundToggle from './components/SoundToggle'
import ThemeToggle from './components/ThemeToggle'
import { questionsCN } from './data/questions-cn'
import { questionsGlobal } from './data/questions-global'
import { citiesCN } from './data/cities-cn'
import { citiesGlobal } from './data/cities-global'
import { calculateMatch } from './utils/matching'
import { useSound } from './utils/useSound'

function App() {
  const [page, setPage] = useState('welcome')
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [region, setRegion] = useState('cn')
  const [difficulty, setDifficulty] = useState('simple')
  const sound = useSound()

  const getQuestions = useCallback(() => {
    const pool = region === 'cn' ? questionsCN : questionsGlobal
    return pool[difficulty]
  }, [region, difficulty])

  const getCities = useCallback(() => {
    return region === 'cn' ? citiesCN : citiesGlobal
  }, [region])

  const handleStart = () => {
    sound.click()
    setPage('versionSelect')
  }

  const handleVersionSelect = (selectedRegion, selectedDifficulty) => {
    sound.transition()
    setRegion(selectedRegion)
    setDifficulty(selectedDifficulty)
    setAnswers([])
    setCurrentQuestion(0)
    setPage('quiz')
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      sound.click()
      setAnswers(answers.slice(0, -1))
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswer = (questionId, optionId) => {
    sound.select()
    const currentQuestions = getQuestions()
    const newAnswers = [...answers, optionId]
    setAnswers(newAnswers)

    if (newAnswers.length >= currentQuestions.length) {
      const matchResults = calculateMatch(newAnswers, currentQuestions, getCities())
      setResult(matchResults[0])
      setPage('loading')
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleLoadingComplete = () => {
    sound.result()
    setPage('result')
  }

  const handleRestart = () => {
    sound.click()
    setPage('welcome')
    setAnswers([])
    setResult(null)
    setCurrentQuestion(0)
  }

  const currentQuestions = getQuestions()

  return (
    <div className="app-container">
      <ThemeToggle />
      <SoundToggle />
      {page === 'welcome' && <Welcome onStart={handleStart} />}
      {page === 'versionSelect' && (
        <VersionSelect onSelect={handleVersionSelect} onBack={() => { sound.click(); setPage('welcome') }} />
      )}
      {page === 'quiz' && currentQuestions && (
        <>
          <Progress current={currentQuestion + 1} total={currentQuestions.length} onBack={currentQuestion > 0 ? handleBack : null} />
          <Question
            key={currentQuestions[currentQuestion].id}
            question={currentQuestions[currentQuestion]}
            onAnswer={handleAnswer}
            currentIndex={currentQuestion}
          />
        </>
      )}
      {page === 'loading' && <Loading onComplete={handleLoadingComplete} />}
      {page === 'result' && result && (
        <Result result={result} onRestart={handleRestart} />
      )}
    </div>
  )
}

export default App
