{
  description = "Plataforma PEA Pescarte";

  inputs.flake-utils.url = github:numtide/flake-utils;

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: 
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in {
        devShells.default = with pkgs; mkShell {
          name = "plataforma-pea-pescarte";
          packages = [ nodejs ];
        };
      }
    );
}
