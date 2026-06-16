import React, { useState, useEffect } from "react";
import { CheckCircle, Play, RefreshCw, Zap } from "lucide-react";

interface AgentStep {
  id: number;
  label: string;
  detail: string;
  status: "pending" | "processing" | "completed";
  icon: string;
}

export const AIInnovation: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(-1);
  const [simulationSteps, setSimulationSteps] = useState<AgentStep[]>([
    { id: 1, label: "Ingest Telemetry", detail: "Edge sensor detects room disconnect event", status: "pending", icon: "telemetry" },
    { id: 2, label: "MCP Context Routing", detail: "Lookup device metadata & Active Directory logs", status: "pending", icon: "route" },
    { id: 3, label: "OCI GenAI Diagnosis", detail: "LLM parses stack trace: HDMI Switcher offline", status: "pending", icon: "brain" },
    { id: 4, label: "Formulate Action", detail: "Generate zero-trust SSH script to reset switcher", status: "pending", icon: "code" },
    { id: 5, label: "Self-Healing Trigger", detail: "Remediation runner resets hardware interface", status: "pending", icon: "heal" },
    { id: 6, label: "Validate & Resolve", detail: "Post-check success. Support ticket closed autonomously", status: "pending", icon: "success" }
  ]);

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIdx(0);
    
    // Reset steps
    setSimulationSteps(prev => prev.map(s => ({ ...s, status: "pending" })));
  };

  useEffect(() => {
    if (!isRunning || currentStepIdx < 0) return;

    if (currentStepIdx >= simulationSteps.length) {
      setIsRunning(false);
      return;
    }

    // Mark current step as processing
    setSimulationSteps(prev => prev.map((s, idx) => {
      if (idx === currentStepIdx) return { ...s, status: "processing" };
      if (idx < currentStepIdx) return { ...s, status: "completed" };
      return s;
    }));

    const timer = setTimeout(() => {
      setCurrentStepIdx(prev => prev + 1);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isRunning, currentStepIdx]);

  // Handle case where we finish
  useEffect(() => {
    if (currentStepIdx === simulationSteps.length) {
      setSimulationSteps(prev => prev.map(s => ({ ...s, status: "completed" })));
      setIsRunning(false);
    }
  }, [currentStepIdx]);

  return (
    <section id="ai-innovation" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-black">
      
      {/* Background aurora effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-orange" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              AI Engineering
            </span>
            <div className="h-px w-8 bg-brand-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Building the Future with Agentic AI
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Suneel engineers secure, sandboxed Agentic platforms using OCI GenAI and custom Model Context Protocol (MCP) servers to automate operational workflows at scale.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Context Card */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between glass-panel p-8 rounded-3xl border border-brand-gray-850/80 bg-brand-gray-950/20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                Active Agentic R&D
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Enterprise Autonomous Operations
              </h3>

              <p className="text-sm text-brand-gray-200 font-normal leading-relaxed">
                By decoupling business logic from agent executors, Suneel's architectures allow AI agents to securely query systems, parse operational state, and deploy container-level self-healing actions.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 text-xs font-mono font-bold">1</div>
                  <p className="text-xs text-brand-gray-200 font-normal"><strong className="text-white font-medium">Model Context Protocol (MCP):</strong> Provides secure API abstractions so agents don't interact with databases directly.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 text-xs font-mono font-bold">2</div>
                  <p className="text-xs text-brand-gray-200 font-normal"><strong className="text-white font-medium">Guardrails & Sandboxing:</strong> Implements hard boundaries on code execution preventing model drift or malicious overrides.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 text-xs font-mono font-bold">3</div>
                  <p className="text-xs text-brand-gray-200 font-normal"><strong className="text-white font-medium">Observability Pipelines:</strong> Real-time tracing of Agent thought patterns and execution actions.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-gray-850/60">
              <button
                onClick={startSimulation}
                disabled={isRunning}
                className="w-full py-3.5 bg-gradient-to-r from-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-green disabled:from-brand-gray-800 disabled:to-brand-gray-900 disabled:text-brand-gray-400 text-black font-semibold rounded-2xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_4px_15px_rgba(251,97,7,0.15)]"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Agent Orchestrating...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black" />
                    Simulate PulseGuard Agent
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Agent Console */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-brand-gray-850 bg-black shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden min-h-[480px]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-brand-gray-850 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-orange" />
                <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                <div className="w-3 h-3 rounded-full bg-brand-green" />
                <span className="text-xs font-mono text-brand-gray-400 ml-2">pulseguard-agent-mesh.sh</span>
              </div>
              <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-full uppercase tracking-widest font-semibold">
                {isRunning ? "Active Execution" : "Idle"}
              </span>
            </div>

            {/* Steps Console */}
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {simulationSteps.map((step, idx) => {
                const isProcessing = step.status === "processing";
                const isCompleted = step.status === "completed";

                return (
                  <div
                    key={step.id}
                    className={`flex items-start gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isProcessing
                        ? "bg-brand-orange/5 border-brand-orange/40 shadow-[0_0_15px_rgba(251,97,7,0.1)] scale-102"
                        : isCompleted
                        ? "bg-brand-gray-950/40 border-brand-gray-850/40 opacity-80"
                        : "bg-transparent border-transparent opacity-40"
                    }`}
                  >
                    <div className="mt-0.5">
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                      ) : isProcessing ? (
                        <RefreshCw className="w-5 h-5 text-brand-orange animate-spin shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-brand-gray-700 shrink-0 flex items-center justify-center text-[10px] font-mono text-brand-gray-400 font-bold">
                          {idx + 1}
                        </div>
                      )}
                    </div>

                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold tracking-wide font-mono ${
                          isProcessing ? "text-brand-orange" : isCompleted ? "text-white" : "text-brand-gray-400"
                        }`}>
                          {step.label}
                        </span>
                        {isProcessing && (
                          <span className="text-[9px] font-mono bg-brand-orange/20 text-brand-orange px-1.5 py-0.2 rounded animate-pulse font-bold">
                            RUNNING
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-[11px] font-normal mt-0.5 leading-relaxed ${
                        isProcessing ? "text-white font-medium" : isCompleted ? "text-brand-gray-200" : "text-brand-gray-400"
                      }`}>
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Console Log */}
            <div className="mt-6 bg-brand-gray-950 border border-brand-gray-850 rounded-xl p-3.5 text-left font-mono text-[10px] text-brand-gray-400 space-y-1">
              <div>
                <span className="text-brand-orange">$</span> npm run start-agent-mesh
              </div>
              {currentStepIdx >= 0 && (
                <div className="text-brand-green animate-pulse">
                  &gt; [INFO] Establishing secure MCP socket handshakes...
                </div>
              )}
              {currentStepIdx >= 2 && (
                <div className="text-brand-yellow">
                  &gt; [LLM] Reasoning path: Switcher API call returned error 503. Initializing reset.
                </div>
              )}
              {currentStepIdx >= 5 && (
                <div className="text-brand-green font-bold">
                  &gt; [SUCCESS] Switcher telemetry restored successfully. Support ticket closed automatically!
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default AIInnovation;
