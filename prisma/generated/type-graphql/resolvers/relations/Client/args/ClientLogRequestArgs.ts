import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestOrderByInput } from "../../../inputs/LogRequestOrderByInput";
import { LogRequestWhereInput } from "../../../inputs/LogRequestWhereInput";
import { LogRequestWhereUniqueInput } from "../../../inputs/LogRequestWhereUniqueInput";
import { LogRequestScalarFieldEnum } from "../../../../enums/LogRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ClientLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  where?: LogRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LogRequestOrderByInput], {
    nullable: true
  })
  orderBy?: LogRequestOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: LogRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"ID" | "isiRequest" | "jenisRequest" | "statusRequest" | "tanggapanRequest" | "tanggapanRequestIsi" | "tglExpired" | "tglRequest" | "tglRespon" | "updatedAt" | "person" | "case" | "request_by" | "application" | "network" | "request_to"> | undefined;
}
