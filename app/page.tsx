import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Alert variant={"destructive"} className='bg-blue-500'>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  );
}
