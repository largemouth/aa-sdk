const reactHookGroupings = {
  Authentication: [
    "useAuthModal",
    "useAddPasskey",
    "useAuthenticate",
    "useConnect",
    "useExportAccount",
    "useLogout",
    "useSigner",
    "useSignerStatus",
    "useUser",
  ],
  "Account Client": ["useAccount", "useSmartAccountClient"],
  "Smart Account Actions": [
    "useSendUserOperation",
    "useSignMessage",
    "useSignTypedData",
    "useWaitForUserOperationTransaction",
    "useDropAndReplaceUserOperation",
    "useClientActions",
    "useChain",
  ],
  "Bundler/RPC Client": ["useBundlerClient"],
  Utilities: [
    "useAlchemyAccountContext",
    "useUiConfig",
    "useConnection",
    "useAuthError",
  ],
};

export default reactHookGroupings;
