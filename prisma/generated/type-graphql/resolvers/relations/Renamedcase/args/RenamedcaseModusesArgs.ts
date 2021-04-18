import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusOrderByInput } from "../../../inputs/CaseModusOrderByInput";
import { CaseModusWhereInput } from "../../../inputs/CaseModusWhereInput";
import { CaseModusWhereUniqueInput } from "../../../inputs/CaseModusWhereUniqueInput";
import { CaseModusScalarFieldEnum } from "../../../../enums/CaseModusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RenamedcaseModusesArgs {
  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  where?: CaseModusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseModusOrderByInput], {
    nullable: true
  })
  orderBy?: CaseModusOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseModusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseModusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}
