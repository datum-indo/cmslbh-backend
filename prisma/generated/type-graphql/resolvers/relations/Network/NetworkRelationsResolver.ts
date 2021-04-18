import * as TypeGraphQL from "type-graphql";
import { CaseReferral } from "../../../models/CaseReferral";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { LogRequest } from "../../../models/LogRequest";
import { Network } from "../../../models/Network";
import { NetworkCaseReferralArgs } from "./args/NetworkCaseReferralArgs";
import { NetworkCaseTransferArgs } from "./args/NetworkCaseTransferArgs";
import { NetworkLogRequestArgs } from "./args/NetworkLogRequestArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class NetworkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CaseReferral], {
    nullable: false
  })
  async CaseReferral(@TypeGraphQL.Root() network: Network, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: NetworkCaseReferralArgs): Promise<CaseReferral[]> {
    return getPrismaFromContext(ctx).network.findUnique({
      where: {
        id: network.id,
      },
    }).CaseReferral(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseTransfer], {
    nullable: false
  })
  async CaseTransfer(@TypeGraphQL.Root() network: Network, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: NetworkCaseTransferArgs): Promise<CaseTransfer[]> {
    return getPrismaFromContext(ctx).network.findUnique({
      where: {
        id: network.id,
      },
    }).CaseTransfer(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async LogRequest(@TypeGraphQL.Root() network: Network, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: NetworkLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).network.findUnique({
      where: {
        id: network.id,
      },
    }).LogRequest(args);
  }
}
