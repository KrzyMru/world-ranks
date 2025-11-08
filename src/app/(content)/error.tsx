'use client'
import { useRouter } from "next/navigation";
import styles from "./error.module.css";
import { startTransition } from "react";
 
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
    const router = useRouter();

    const handleReset = () => {
        startTransition(() => {
            reset();
            router.refresh();
        });
    }

    return (
        <div className={styles.page}>
            <h2 className="text__xl--semibold">Something went wrong!</h2>
            <div>
                <p className="text__lg--medium">Failed to load the country data.</p>
                <p className="text__lg--medium">Check your connection or try again later.</p>
            </div>
            <button
                title="Try again"
                onClick={handleReset}
                className={`${styles.button} text__lg--semibold`}
            >
                Try again
            </button>
        </div>
    )
}

export default Error;