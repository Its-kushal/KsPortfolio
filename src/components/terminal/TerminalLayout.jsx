import Pane from '../ui/Pane';

export default function TerminalLayout() {
  return (
      <div className="w-full max-w-[1600px] mx-auto h-[80vh] grid grid-cols-12 grid-rows-2 gap-4">
          <Pane title="~/navigation" className="col-span-6 row-span-2">
              <div className="space-y-2 font-bold tracking-widest text-lg">
                  <p className="text-white hover:bg-terminal-green hover:text-black w-fit px-2">
                      $ cd about_me
                  </p>
                  <p className="hover:bg-terminal-green hover:text-black w-fit px-2">
                      $ ls projects/
                  </p>
                  <p className="hover:bg-terminal-green hover:text-black w-fit px-2">
                      $ cat resume.pdf
                  </p>
                  <p className="hover:bg-terminal-green hover:text-black w-fit px-2">
                      $ ./contact.sh
                  </p>
              </div>
          </Pane>

          <Pane
              title="preview"
              className="col-span-3 row-span-2 flex items-center justify-center"
          >
              <div className="text-center opacity-50 border border-dashed border-terminal-green p-4 w-full h-full flex items-center justify-center">
                  [ Content Preview Will Render Here ]
              </div>
          </Pane>

          <Pane title="neofetch" className="col-span-3 row-span-1">
              <div className="flex gap-4">
                  {/* ASCII Arch Logo */}
                  <div className="text-terminal-green whitespace-pre font-bold leading-none hidden xl:block">
                      {`K   K
K  K 
K K  
KK   
K K  
K  K 
K   K`}
                  </div>
                  <div className="text-xs space-y-1">
                      <p>
                          <span className="text-white font-bold">OS:</span> Arch
                          Linux x86_64
                      </p>
                      <p>
                          <span className="text-white font-bold">Host:</span>{" "}
                          Kushal-Portfolio
                      </p>
                      <p>
                          <span className="text-white font-bold">Kernel:</span>{" "}
                          6.8.0-106-generic
                      </p>
                      <p>
                          <span className="text-white font-bold">Uptime:</span>{" "}
                          14 hours, 2 mins
                      </p>
                      <p>
                          <span className="text-white font-bold">Shell:</span>{" "}
                          bash 5.2.21
                      </p>
                      <p>
                          <span className="text-white font-bold">Theme:</span>{" "}
                          Terminal-Dark [GTK2/3]
                      </p>
                  </div>
              </div>
          </Pane>

          <Pane title="htop_progress" className="col-span-3 row-span-1">
              <div className="text-xs space-y-3">
                  <div>
                      <div className="flex justify-between mb-1">
                          <span>React.js Mastery</span>
                          <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2">
                          <div className="bg-terminal-green h-2 w-[90%]"></div>
                      </div>
                  </div>

                  <div>
                      <div className="flex justify-between mb-1">
                          <span>Backend / Node</span>
                          <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2">
                          <div className="bg-terminal-green h-2 w-[75%]"></div>
                      </div>
                  </div>

                  <div>
                      <div className="flex justify-between mb-1">
                          <span>Linux / DevOps</span>
                          <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2">
                          <div className="bg-terminal-green h-2 w-[85%]"></div>
                      </div>
                  </div>
              </div>
          </Pane>
      </div>
  );
}