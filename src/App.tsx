import { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, RootState } from './store';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  ArrowRight, 
  User, 
  BadgeCheck, 
  GraduationCap, 
  ChevronLeft, 
  Info, 
  Play, 
  CheckCircle, 
  Upload,
  Home as HomeIcon,
  BookOpen,
  BarChart3,
  UserCircle,
  Bolt,
  Settings,
  Star,
  Trophy,
  Bot,
  Cpu,
  Hammer,
  Droplets,
  Palette,
  Wrench
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Button = ({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'outline' }) => {
  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary/5',
    ghost: 'bg-transparent text-slate-500 hover:bg-slate-100',
    outline: 'bg-transparent border-2 border-slate-200 text-slate-600 hover:border-primary hover:text-primary',
  };

  return (
    <button 
      className={cn(
        'w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white rounded-3xl p-6 shadow-sm border border-slate-100', className)}>
    {children}
  </div>
);

// --- Screens ---

const SplashScreen = ({ onNext }: { onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-screen flex flex-col items-center justify-between p-8 bg-background relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <GraduationCap className="absolute top-[15%] left-[10%] text-primary/10 w-16 h-16 -rotate-12" />
      <Palette className="absolute top-[25%] right-[15%] text-primary/10 w-12 h-12 rotate-12" />
      <Wrench className="absolute bottom-[20%] left-[15%] text-primary/10 w-14 h-14 rotate-45" />
    </div>

    <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-primary rounded-3xl rotate-6 shadow-xl shadow-primary/20" />
        <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 border-2 border-primary flex items-center justify-center">
          <Rocket className="text-primary w-16 h-16" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight text-slate-900">
          Crazy <span className="text-primary">Skill</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium mt-4">
          Learn Skills.<br />Level Up Your Future.
        </p>
      </div>
    </div>

    <div className="w-full max-w-md z-10">
      <Button onClick={onNext}>
        Get Started <ArrowRight size={20} />
      </Button>
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-2 h-2 rounded-full bg-primary/20" />
        <div className="w-2 h-2 rounded-full bg-primary/20" />
      </div>
    </div>
  </motion.div>
);

const LoginScreen = ({ onNext }: { onNext: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '-100%' }}
    className="h-screen flex flex-col bg-background"
  >
    <header className="p-4 flex items-center">
      <button className="p-2 rounded-full hover:bg-slate-100"><ChevronLeft /></button>
      <h2 className="flex-1 text-center font-bold text-lg">Welcome to LearnQuest</h2>
    </header>
    <main className="flex-1 px-8 flex flex-col items-center">
      <div className="py-12 flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
          <GraduationCap className="text-primary w-12 h-12" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-black">Start Your <br /><span className="text-primary">Adventure</span></h2>
          <p className="text-slate-500 mt-2">Log in to track your progress and unlock new skills.</p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold ml-1">Student Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Enter your full name"
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-medium"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold ml-1">School ID or Mobile Number</label>
          <div className="relative">
            <BadgeCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Enter ID or phone number"
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-medium"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold ml-1">Select Your Class</label>
          <select className="w-full px-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-medium appearance-none">
            <option>Choose your class (5-10)</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>
        </div>
        <Button className="mt-4" onClick={onNext}>
          Start Learning <ArrowRight size={20} />
        </Button>
      </div>
    </main>
  </motion.div>
);

const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn('animate-pulse bg-slate-200 rounded-2xl', className)} />
);

const HomeSkeleton = () => (
  <div className="p-8 space-y-8">
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="w-24 h-24 rounded-full" />
      <Skeleton className="w-48 h-8" />
      <Skeleton className="w-32 h-4" />
    </div>
    <div className="space-y-4">
      <Skeleton className="w-32 h-6" />
      <Skeleton className="w-full h-48 rounded-3xl" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map(i => <Skeleton key={i} className="w-full h-32 rounded-[2.5rem]" />)}
    </div>
  </div>
);

const HomeScreen = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <HomeSkeleton />;
  
  return (
    <div className="pb-24 bg-background min-h-screen">
      <header className="p-8 flex flex-col items-center gap-4">
        <div className="relative">
          <img src={user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"} className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-white flex items-center gap-1">
            <Star size={10} fill="currentColor" /> Lvl {user.level}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black">{user.name}</h1>
          <p className="text-slate-500 font-medium">{user.role} • {user.streak} Day Streak 🔥</p>
        </div>
        <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
          <Bolt className="text-primary fill-primary" size={16} />
          <span className="font-bold text-primary">{user.xp} XP</span>
        </div>
      </header>

      <main className="px-6 space-y-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-black">Continue Learning</h3>
            <button className="text-primary font-bold">View All</button>
          </div>
          <Card className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center">
                <Bot className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-lg">Intro to Robotics</h4>
                <p className="text-slate-500 text-sm">Module 3: Understanding Sensors</p>
                <div className="mt-2 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[65%]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 mt-1">65% Completed</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('skillDetail')}>
              <Play size={16} fill="currentColor" /> Resume Lesson
            </Button>
          </Card>
        </section>

        <section>
          <h3 className="text-xl font-black mb-4">Explore Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Robotics', xp: 450, icon: Bot, color: 'bg-blue-50', text: 'text-blue-500' },
              { name: 'AI Basics', xp: 320, icon: Cpu, color: 'bg-purple-50', text: 'text-purple-500' },
              { name: 'Carpentry', xp: 210, icon: Hammer, color: 'bg-yellow-50', text: 'text-yellow-500' },
              { name: 'Plumbing', xp: 150, icon: Droplets, color: 'bg-cyan-50', text: 'text-cyan-500' },
              { name: 'Mechanics', xp: 500, icon: Wrench, color: 'bg-red-50', text: 'text-red-500' },
              { name: 'Art & Craft', xp: 120, icon: Palette, color: 'bg-pink-50', text: 'text-pink-500' },
            ].map((skill) => (
              <button 
                key={skill.name}
                onClick={() => onNavigate('skillDetail')}
                className="bg-white p-6 rounded-[2.5rem] flex flex-col items-center gap-3 shadow-sm border border-slate-50 active:scale-95 transition-all"
              >
                <div className={cn('w-12 h-12 rounded-full flex items-center justify-center', skill.color)}>
                  <skill.icon className={skill.text} size={24} />
                </div>
                <div className="text-center">
                  <p className="font-black text-sm">{skill.name}</p>
                  <p className="text-primary font-bold text-xs">{skill.xp} XP</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <Card className="bg-slate-900 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Daily Quest</span>
              <h3 className="text-2xl font-black mt-4">Fix the Leak!</h3>
              <p className="text-slate-400 text-sm mt-2 max-w-[200px]">Complete the plumbing simulation within 5 minutes to earn bonus XP.</p>
              <Button className="w-auto mt-6 px-8" onClick={() => onNavigate('lesson')}>Start Quest</Button>
            </div>
            <Trophy className="absolute right-[-20px] bottom-[-20px] w-40 h-40 text-slate-800 -rotate-12" />
          </Card>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center z-50">
        <NavItem icon={HomeIcon} label="Home" active onClick={() => onNavigate('home')} />
        <NavItem icon={BookOpen} label="Courses" onClick={() => onNavigate('skillDetail')} />
        <NavItem icon={BarChart3} label="Rank" onClick={() => onNavigate('progress')} />
        <NavItem icon={UserCircle} label="Profile" onClick={() => onNavigate('progress')} />
      </nav>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) => (
  <button onClick={onClick} className={cn('flex flex-col items-center gap-1 transition-colors', active ? 'text-primary' : 'text-slate-400')}>
    <Icon size={24} />
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

const SkillDetailScreen = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (s: string) => void }) => (
  <div className="bg-background min-h-screen pb-24">
    <header className="p-4 flex items-center justify-between">
      <button onClick={onBack} className="p-2 rounded-full bg-white shadow-sm"><ChevronLeft /></button>
      <h2 className="font-black text-lg">Robotics</h2>
      <button className="p-2 rounded-full bg-orange-100 text-primary"><Info size={20} /></button>
    </header>
    
    <main className="px-6 space-y-8">
      <section className="mt-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Current Status</p>
        <div className="flex justify-between items-end mt-2">
          <h3 className="text-2xl font-black">Level 4 Progress</h3>
          <p className="text-slate-400 font-bold text-sm">650 / 1000 XP</p>
        </div>
        <div className="mt-4 w-full bg-slate-100 h-4 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[65%]" />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] font-bold text-slate-400">Level 4</span>
          <span className="text-[10px] font-black text-primary bg-orange-50 px-3 py-1 rounded-full">350 XP to Level 5</span>
          <span className="text-[10px] font-bold text-slate-400">Level 5</span>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-black mb-6">Your Journey</h3>
        <div className="space-y-6">
          <JourneyItem 
            level={1} 
            title="Introduction" 
            desc="Basics of Robotics & Safety" 
            status="completed" 
            stars={3} 
            img="https://picsum.photos/seed/robot1/200/200" 
          />
          <JourneyItem 
            level={2} 
            title="Components" 
            desc="Sensors and Actuators" 
            status="completed" 
            stars={2} 
            img="https://picsum.photos/seed/robot2/200/200" 
          />
          <JourneyItem 
            level={3} 
            title="Simple Circuits" 
            desc="Powering your robot" 
            status="completed" 
            stars={3} 
            img="https://picsum.photos/seed/robot3/200/200" 
          />
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] border-2 border-primary -m-2" />
            <JourneyItem 
              level={4} 
              title="Programming Logic" 
              desc="If/Else statements" 
              status="current" 
              img="https://picsum.photos/seed/robot4/200/200" 
              onAction={() => onNavigate('lesson')}
            />
          </div>
          <JourneyItem level={5} title="Motors & Movement" desc="Controlling speed & direction" status="locked" />
        </div>
      </section>
    </main>
  </div>
);

const JourneyItem = ({ level, title, desc, status, stars, img, onAction }: any) => (
  <div className={cn('bg-white p-6 rounded-[2.5rem] shadow-sm flex items-center gap-4', status === 'locked' && 'opacity-50')}>
    <div className="flex-1">
      <span className={cn('text-[10px] font-black uppercase tracking-widest', status === 'completed' ? 'text-green-500' : status === 'current' ? 'text-primary' : 'text-slate-400')}>
        {status}
      </span>
      <h4 className="text-lg font-black mt-1">Level {level}: {title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
      {status === 'completed' && (
        <div className="flex gap-1 mt-2">
          {[1, 2, 3].map(i => <Star key={i} size={14} className={i <= stars ? 'text-primary fill-primary' : 'text-slate-200'} />)}
        </div>
      )}
      <div className="mt-4">
        {status === 'completed' ? (
          <button className="flex items-center gap-2 text-slate-600 font-bold text-sm bg-slate-50 px-4 py-2 rounded-full">
            <Bolt size={14} /> Replay Level
          </button>
        ) : status === 'current' ? (
          <Button className="py-3 text-sm" onClick={onAction}>
            <Play size={14} fill="currentColor" /> Continue Level
          </Button>
        ) : null}
      </div>
    </div>
    {img && <img src={img} className="w-20 h-20 rounded-2xl object-cover" />}
    {status === 'locked' && <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center"><Bolt className="text-slate-300" /></div>}
  </div>
);

const LessonScreen = ({ onBack, onComplete }: { onBack: () => void, onComplete: () => void }) => (
  <div className="bg-background min-h-screen p-6">
    <header className="flex items-center justify-between mb-8">
      <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100"><ChevronLeft /></button>
      <div className="bg-orange-50 px-4 py-2 rounded-full flex items-center gap-2">
        <Bolt className="text-primary fill-primary" size={16} />
        <span className="font-bold text-primary">50 XP</span>
      </div>
    </header>

    <div className="space-y-2 mb-8">
      <p className="text-primary font-bold text-sm uppercase tracking-widest">Level 1 • Basic Electronics</p>
      <h1 className="text-3xl font-black">Introduction to Circuits</h1>
    </div>

    <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden mb-8 group">
      <img src="https://picsum.photos/seed/circuits/800/450" className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform">
          <Play className="text-white fill-white ml-1" size={32} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[40%]" />
        </div>
        <div className="flex justify-between mt-2 text-white text-[10px] font-bold">
          <span>0:37</span>
          <span>2:23</span>
        </div>
      </div>
    </div>

    <Button onClick={onComplete}>
      <CheckCircle size={20} /> Mark as Completed
    </Button>

    <Card className="mt-8 border-2 border-dashed border-slate-200 bg-transparent">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
          <Settings className="text-primary" size={16} />
        </div>
        <h3 className="font-black text-lg">Your Mission</h3>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed">
        Draw a simple circuit with a battery and a light bulb on a piece of paper. Take a photo and upload it here to earn extra XP!
      </p>
      <div className="mt-6 p-8 border-2 border-dashed border-orange-200 rounded-3xl bg-orange-50/50 flex flex-col items-center gap-3 cursor-pointer hover:bg-orange-50 transition-colors">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Upload className="text-primary" size={24} />
        </div>
        <span className="text-primary font-black">Upload Task Photo</span>
      </div>
    </Card>
  </div>
);

const AchievementScreen = ({ onNext }: { onNext: () => void }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="h-screen flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden"
  >
    <div className="absolute top-12 left-8">
      <button onClick={onNext} className="p-2 rounded-full bg-white shadow-sm"><ChevronLeft /></button>
    </div>
    
    <div className="flex-1 flex flex-col items-center justify-center gap-12">
      <div className="relative">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-primary to-yellow-400 p-2 shadow-2xl shadow-primary/40">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-white">
            <img src="https://picsum.photos/seed/gears/400/400" className="w-full h-full object-cover opacity-40" />
            <Settings className="absolute text-yellow-400 w-32 h-32 drop-shadow-lg" />
          </div>
        </div>
        <Star className="absolute -top-4 -right-4 text-yellow-400 fill-yellow-400 w-16 h-16 drop-shadow-md" />
        <Star className="absolute bottom-4 -left-8 text-yellow-400 fill-yellow-400 w-12 h-12 drop-shadow-md" />
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black">Congratulations!</h1>
        <p className="text-slate-500 text-xl">
          You've unlocked the <span className="text-primary font-black">Star Mechanic</span> badge.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-100 px-8 py-4 rounded-full flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <Bolt className="text-white fill-white" size={20} />
        </div>
        <span className="text-2xl font-black text-yellow-600">+50 XP</span>
      </div>
    </div>

    <div className="w-full max-w-md space-y-4">
      <Button onClick={onNext}>
        Continue Learning <ArrowRight size={20} />
      </Button>
      <button className="w-full py-4 text-slate-400 font-bold">View All Badges</button>
    </div>
  </motion.div>
);

const ProgressScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-background min-h-screen pb-24">
    <header className="p-4 flex items-center justify-between">
      <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100"><ChevronLeft /></button>
      <h2 className="font-black text-lg">My Progress</h2>
      <button className="p-2 rounded-full hover:bg-slate-100"><Settings size={20} /></button>
    </header>

    <main className="px-6 space-y-8">
      <div className="flex items-center gap-4 py-4">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi" className="w-20 h-20 rounded-full border-4 border-white shadow-md" />
        <div>
          <h3 className="text-2xl font-black">Ravi Kumar</h3>
          <p className="text-slate-500 font-medium">Class 8-B • Rural Genius School</p>
        </div>
      </div>

      <Card className="bg-primary text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm font-bold opacity-80">Current Class Rank</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-6xl font-black">#4</span>
            <span className="text-lg font-bold opacity-80">Top 5%</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold">
            <BarChart3 size={16} /> You climbed 2 spots this week!
          </div>
        </div>
        <Trophy className="absolute right-[-20px] top-[-20px] w-48 h-48 text-white/10 -rotate-12" />
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <StatCard icon={Bolt} value="1,250" label="Total XP" color="bg-orange-50" iconColor="text-primary" />
        <StatCard icon={CheckCircle} value="12" label="Skills Done" color="bg-blue-50" iconColor="text-blue-500" />
        <StatCard icon={BadgeCheck} value="3" label="Certificates" color="bg-green-50" iconColor="text-green-500" />
      </div>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-black">Weekly Activity</h3>
          <span className="bg-green-50 text-green-500 text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1">
            <ArrowRight size={10} className="-rotate-45" /> 15%
          </span>
        </div>
        <Card className="h-48 flex items-end justify-between gap-2 px-8">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-2 flex-1">
              <div 
                className={cn('w-full rounded-t-lg transition-all', i === 2 ? 'bg-primary' : 'bg-slate-100')} 
                style={{ height: `${[20, 40, 80, 50, 30, 60, 45][i]}%` }} 
              />
              <span className={cn('text-[10px] font-bold', i === 2 ? 'text-primary' : 'text-slate-400')}>{day}</span>
            </div>
          ))}
        </Card>
      </section>

      <section>
        <h3 className="text-xl font-black mb-4">Recent Achievements</h3>
        <div className="space-y-4">
          <AchievementItem title="Science Wizard" desc='Completed "Basic Biology"' date="Nov 2" icon={Cpu} color="bg-green-50" iconColor="text-green-500" />
          <AchievementItem title="Math Master" desc='Completed "Fractions II"' date="Oct 28" icon={BarChart3} color="bg-blue-50" iconColor="text-blue-500" />
        </div>
      </section>
    </main>
  </div>
);

const StatCard = ({ icon: Icon, value, label, color, iconColor }: any) => (
  <Card className="p-4 flex flex-col items-center gap-2">
    <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', color)}>
      <Icon className={iconColor} size={20} />
    </div>
    <div className="text-center">
      <p className="text-lg font-black">{value}</p>
      <p className="text-[10px] font-bold text-slate-400">{label}</p>
    </div>
  </Card>
);

const AchievementItem = ({ title, desc, date, icon: Icon, color, iconColor }: any) => (
  <Card className="flex items-center gap-4 py-4">
    <div className={cn('w-12 h-12 rounded-full flex items-center justify-center', color)}>
      <Icon className={iconColor} size={24} />
    </div>
    <div className="flex-1">
      <h4 className="font-black text-sm">{title}</h4>
      <p className="text-slate-400 text-xs">{desc}</p>
    </div>
    <span className="text-[10px] font-black text-primary bg-orange-50 px-3 py-1 rounded-full">{date}</span>
  </Card>
);

// --- Main App ---

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  return (
    <div className="max-w-md mx-auto h-screen overflow-y-auto no-scrollbar bg-background shadow-2xl relative">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && <SplashScreen onNext={() => setCurrentScreen('login')} />}
        {currentScreen === 'login' && <LoginScreen onNext={() => setCurrentScreen('home')} />}
        {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} />}
        {currentScreen === 'skillDetail' && <SkillDetailScreen onBack={() => setCurrentScreen('home')} onNavigate={setCurrentScreen} />}
        {currentScreen === 'lesson' && <LessonScreen onBack={() => setCurrentScreen('skillDetail')} onComplete={() => setCurrentScreen('achievement')} />}
        {currentScreen === 'achievement' && <AchievementScreen onNext={() => setCurrentScreen('home')} />}
        {currentScreen === 'progress' && <ProgressScreen onBack={() => setCurrentScreen('home')} />}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
