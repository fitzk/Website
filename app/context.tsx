"use client";
import React from "react";
import { queryUserMetrics } from "./githubGraphql";

interface UserMetricsQueryResponseData {
  avatarUrl: string;
  isHireable: boolean;
}

const SharedContext = React.createContext<{
  user: undefined | UserMetricsQueryResponseData;
}>({ user: undefined });

export function SharedContextProvider(props: { children: React.ReactNode }) {
  const [userMetrics, setUserMetrics] = React.useState<
    undefined | UserMetricsQueryResponseData
  >();

  React.useEffect(() => {
    async function runQuery() {
      try {
        const { user } = await queryUserMetrics();
        if (user) {
          setUserMetrics(user);
        }
      } catch (e) {
        // @TODO handle error
        console.debug(e);
      }
    }
    runQuery();
  }, []);

  return (
    <SharedContext.Provider value={{ user: userMetrics }}>
      {props.children}
    </SharedContext.Provider>
  );
}

export function useSharedContext() {
  return React.useContext(SharedContext);
}
