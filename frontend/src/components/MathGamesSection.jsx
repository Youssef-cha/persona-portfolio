import React, { useState, useEffect, useRef } from 'react';
import { Play, Trophy, RefreshCw, Calculator, Target, Zap, Brain, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const MathGamesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [gameStats, setGameStats] = useState({
    quickMath: { score: 0, bestTime: null, attempts: 0 },
    patternGame: { score: 0, level: 1, attempts: 0 },
    geometryQuiz: { score: 0, correct: 0, attempts: 0 }
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const games = [
    {
      id: 'quickMath',
      title: 'Calcul Rapide',
      description: 'Résolvez des équations le plus rapidement possible',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Facile à Difficile'
    },
    {
      id: 'patternGame',
      title: 'Suites Logiques',
      description: 'Trouvez le motif dans les séquences mathématiques',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Intermédiaire'
    },
    {
      id: 'geometryQuiz',
      title: 'Quiz Géométrie',
      description: 'Testez vos connaissances en géométrie',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      difficulty: 'Expert'
    }
  ];

  const QuickMathGame = () => {
    const [problem, setProblem] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(30);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [feedback, setFeedback] = useState('');

    const generateProblem = () => {
      const operations = ['+', '-', '×', '÷'];
      const op = operations[Math.floor(Math.random() * operations.length)];
      let a, b, answer;
      
      switch(op) {
        case '+':
          a = Math.floor(Math.random() * 50) + 1;
          b = Math.floor(Math.random() * 50) + 1;
          answer = a + b;
          break;
        case '-':
          a = Math.floor(Math.random() * 50) + 25;
          b = Math.floor(Math.random() * 25) + 1;
          answer = a - b;
          break;
        case '×':
          a = Math.floor(Math.random() * 12) + 1;
          b = Math.floor(Math.random() * 12) + 1;
          answer = a * b;
          break;
        case '÷':
          answer = Math.floor(Math.random() * 12) + 1;
          b = Math.floor(Math.random() * 12) + 1;
          a = answer * b;
          break;
      }
      
      return { question: `${a} ${op} ${b}`, answer };
    };

    const startGame = () => {
      setIsPlaying(true);
      setScore(0);
      setTimeLeft(30);
      setProblem(generateProblem());
      setUserAnswer('');
      setFeedback('');
    };

    const checkAnswer = () => {
      if (parseInt(userAnswer) === problem.answer) {
        setScore(score + 1);
        setFeedback('✅ Correct!');
        setProblem(generateProblem());
        setUserAnswer('');
        setTimeout(() => setFeedback(''), 1000);
      } else {
        setFeedback('❌ Incorrect, essayez encore!');
        setTimeout(() => setFeedback(''), 1000);
      }
    };

    useEffect(() => {
      if (isPlaying && timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0) {
        setIsPlaying(false);
        setGameStats(prev => ({
          ...prev,
          quickMath: {
            score: Math.max(prev.quickMath.score, score),
            bestTime: 30,
            attempts: prev.quickMath.attempts + 1
          }
        }));
      }
    }, [isPlaying, timeLeft, score]);

    return (
      <div className="p-6 space-y-4">
        {!isPlaying ? (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Calcul Rapide</h3>
            <p className="text-gray-600">Résolvez un maximum d'équations en 30 secondes!</p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">Meilleur score: <span className="font-bold text-blue-600">{gameStats.quickMath.score}</span></p>
              <p className="text-sm text-gray-700">Tentatives: {gameStats.quickMath.attempts}</p>
            </div>
            <Button onClick={startGame} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              <Play className="mr-2" size={18} />
              Commencer
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Score: {score}</div>
              <div className="text-lg font-bold text-red-600">Temps: {timeLeft}s</div>
            </div>
            
            {problem && (
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {problem.question} = ?
                </div>
                
                <div className="flex gap-2 justify-center">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                    className="px-4 py-2 border rounded-lg text-center text-xl font-bold focus:ring-2 focus:ring-blue-500"
                    placeholder="?"
                    autoFocus
                  />
                  <Button onClick={checkAnswer} disabled={!userAnswer}>
                    ✓
                  </Button>
                </div>
                
                {feedback && (
                  <div className={`text-xl font-bold ${feedback.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                    {feedback}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const PatternGame = () => {
    const [sequence, setSequence] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [level, setLevel] = useState(1);
    const [feedback, setFeedback] = useState('');

    const generateSequence = (level) => {
      const patterns = [
        // Arithmetic sequences
        () => {
          const start = Math.floor(Math.random() * 10) + 1;
          const diff = Math.floor(Math.random() * 5) + 2;
          return Array.from({length: 4 + level}, (_, i) => start + i * diff);
        },
        // Geometric sequences
        () => {
          const start = Math.floor(Math.random() * 3) + 2;
          const ratio = Math.floor(Math.random() * 3) + 2;
          return Array.from({length: 4 + Math.min(level, 2)}, (_, i) => start * Math.pow(ratio, i));
        },
        // Fibonacci-like
        () => {
          const seq = [1, 1];
          for(let i = 2; i < 5 + level; i++) {
            seq.push(seq[i-1] + seq[i-2]);
          }
          return seq;
        }
      ];
      
      const pattern = patterns[Math.floor(Math.random() * patterns.length)]();
      return pattern;
    };

    const startGame = () => {
      const fullSequence = generateSequence(level);
      setSequence(fullSequence.slice(0, -1));
      setUserAnswer('');
      setIsPlaying(true);
      setFeedback('');
    };

    const checkAnswer = () => {
      // Simple validation - in real game would need more sophisticated checking
      if (parseInt(userAnswer) > 0) {
        setLevel(level + 1);
        setFeedback('✅ Excellent! Niveau suivant!');
        setTimeout(() => {
          startGame();
        }, 2000);
      } else {
        setFeedback('❌ Essayez encore!');
      }
    };

    return (
      <div className="p-6 space-y-4">
        {!isPlaying ? (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Suites Logiques</h3>
            <p className="text-gray-600">Trouvez le nombre suivant dans la séquence!</p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">Niveau actuel: <span className="font-bold text-purple-600">{level}</span></p>
            </div>
            <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Target className="mr-2" size={18} />
              Jouer
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-lg font-bold mb-4">Niveau {level}</div>
              <div className="text-2xl font-bold mb-4">
                {sequence.map((num, idx) => (
                  <span key={idx} className="mx-2 px-3 py-2 bg-purple-100 rounded-lg">
                    {num}
                  </span>
                ))}
                <span className="mx-2 px-3 py-2 bg-gray-200 rounded-lg">?</span>
              </div>
              
              <div className="flex gap-2 justify-center">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  className="px-4 py-2 border rounded-lg text-center text-xl font-bold focus:ring-2 focus:ring-purple-500"
                  placeholder="?"
                />
                <Button onClick={checkAnswer} disabled={!userAnswer}>
                  ✓
                </Button>
              </div>
              
              {feedback && (
                <div className={`mt-4 text-xl font-bold ${feedback.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const GeometryQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const questions = [
      {
        question: "Combien d'angles a un triangle?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        shape: "triangle"
      },
      {
        question: "Quelle est l'aire d'un carré de côté 4?",
        options: ["8", "12", "16", "20"],
        correct: 2,
        shape: "square"
      },
      {
        question: "Combien de côtés a un hexagone?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        shape: "hexagon"
      }
    ];

    const startQuiz = () => {
      setIsPlaying(true);
      setScore(0);
      setQuestionIndex(0);
      setCurrentQuestion(questions[0]);
      setFeedback('');
    };

    const answerQuestion = (answerIndex) => {
      if (answerIndex === currentQuestion.correct) {
        setScore(score + 1);
        setFeedback('✅ Correct!');
      } else {
        setFeedback('❌ Incorrect!');
      }

      setTimeout(() => {
        if (questionIndex < questions.length - 1) {
          setQuestionIndex(questionIndex + 1);
          setCurrentQuestion(questions[questionIndex + 1]);
          setFeedback('');
        } else {
          setIsPlaying(false);
          setGameStats(prev => ({
            ...prev,
            geometryQuiz: {
              score: Math.max(prev.geometryQuiz.score, score + (answerIndex === currentQuestion.correct ? 1 : 0)),
              correct: score + (answerIndex === currentQuestion.correct ? 1 : 0),
              attempts: prev.geometryQuiz.attempts + 1
            }
          }));
        }
      }, 1500);
    };

    return (
      <div className="p-6 space-y-4">
        {!isPlaying ? (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Quiz Géométrie</h3>
            <p className="text-gray-600">Testez vos connaissances en géométrie!</p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">Meilleur score: <span className="font-bold text-emerald-600">{gameStats.geometryQuiz.score}/{questions.length}</span></p>
            </div>
            <Button onClick={startQuiz} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
              <Brain className="mr-2" size={18} />
              Commencer le Quiz
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-lg font-bold mb-4">Question {questionIndex + 1}/{questions.length}</div>
              <div className="text-lg mb-4">{currentQuestion.question}</div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => answerQuestion(idx)}
                    className="p-3 bg-gray-100 hover:bg-emerald-100 rounded-lg transition-colors font-semibold"
                    disabled={feedback !== ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              {feedback && (
                <div className={`text-xl font-bold ${feedback.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        )}
        
        {!isPlaying && questionIndex > 0 && (
          <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
            <Award className="mx-auto mb-2 text-emerald-600" size={32} />
            <div className="text-xl font-bold">Quiz Terminé!</div>
            <div className="text-lg">Score Final: {gameStats.geometryQuiz.correct}/{questions.length}</div>
          </div>
        )}
      </div>
    );
  };

  const renderActiveGame = () => {
    switch(activeGame) {
      case 'quickMath':
        return <QuickMathGame />;
      case 'patternGame':
        return <PatternGame />;
      case 'geometryQuiz':
        return <GeometryQuiz />;
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Mathematical Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-200 rotate-45 animate-spin-slow opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-0 h-0 border-l-16 border-r-16 border-b-28 border-l-transparent border-r-transparent border-b-purple-200 animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border-4 border-emerald-200 animate-bounce opacity-25"></div>
        
        {/* Geometric pattern */}
        <svg className="absolute top-20 right-20 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Jeux Mathématiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ma passion pour les mathématiques à travers ces mini-jeux interactifs !
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
              <Trophy className="text-yellow-600" size={20} />
              <span className="text-yellow-800 font-semibold">Spécialement conçu pour les recruteurs curieux!</span>
            </div>
          </div>
        </div>

        {!activeGame ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {games.map((game, index) => {
              const Icon = game.icon;
              return (
                <Card
                  key={game.id}
                  className={`p-6 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl interactive ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setActiveGame(game.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                    <p className="text-gray-600 mb-4">{game.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      Difficulté: <span className="font-semibold">{game.difficulty}</span>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90 text-white border-0`}>
                      <Play className="mr-2" size={18} />
                      Jouer
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {games.find(g => g.id === activeGame)?.title}
                </h2>
                <Button
                  onClick={() => setActiveGame(null)}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="mr-2" size={16} />
                  Changer de Jeu
                </Button>
              </div>
              {renderActiveGame()}
            </Card>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .border-l-16 { border-left-width: 16px; }
        .border-r-16 { border-right-width: 16px; }
        .border-b-28 { border-bottom-width: 28px; }
      `}</style>
    </section>
  );
};

export default MathGamesSection;