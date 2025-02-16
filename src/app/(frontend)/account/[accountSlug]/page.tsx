import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { accountData } from "@/constant/data";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { accountSlug: string } }) => {
  const accountSegment = decodeURI(params.accountSlug);

  const accountSegmentFound = accountData.find(
    (data) => data.title === accountSegment,
  );
  if (!accountSegmentFound) {
    return notFound();
  }
  return (
    <div className="p-4">
      <Card className="p-4">
        <CardTitle className=" text-lg capitalize max-sm:text-sm">
          {accountSegmentFound?.title}
        </CardTitle>
        <CardDescription>{accountSegmentFound?.description}</CardDescription>
      </Card>
      <CardContent>you data here</CardContent>
    </div>
  );
};

export default Page;
